import User from "../../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const logOutController = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const accessToken = req.cookies.accessToken;

    let decoded;

    // Verify access token if available
    if (accessToken) {
      try {
        decoded = jwt.verify(accessToken, process.env.accessToken_Secret);
      } catch (error) {
        console.log("Access token invalid:", error.message);
      }
    }

    // If access token is unavailable, verify refresh token
    if (!decoded && refreshToken) {
      try {
        decoded = jwt.verify(refreshToken, process.env.RefreshToken_Secret_Key);
      } catch (error) {
        console.log("Refresh token invalid:", error.message);
      }
    }

    if (decoded?.userId && refreshToken) {
      const user = await User.findById(decoded.userId);

      if (user) {
        const UpdatedTokenData = [];

        for (const ref of user.refreshTokens) {
          const isMatch = await bcrypt.compare(refreshToken, ref);

          if (!isMatch) {
            UpdatedTokenData.push(ref);
          }
        }

        user.refreshTokens = UpdatedTokenData;
        await user.save();
      }
    }

    // Clear cookies
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    return res.status(200).json({
      message: "Logout successful",
      success: true,
    });
  } catch (error) {
    console.error("Logout error:", error);

    return res.status(500).json({
      message: "Logout failed",
      success: false,
    });
  }
};

export default logOutController;
