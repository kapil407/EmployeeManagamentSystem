import User from "../../Models/User.js";

const SearchTeamMember = async (req, res) => {
  try {
    const { value } = req.body;
    const SearchMembers = await User.find({
        role:"EMPLOYEE",
        manager:req.user._id,
      $or: [
        { name: { $regex: value, $options: "i" } },
        { lastName: { $regex: value, $options: "i" } },
        {
          $expr: {
            $regexMatch: {
              input: { $concat: ["$name", " ", "$lastName"] },
              regex: value,
              options: "i",
            },
            $regexMatch: {
              input: { $concat: ["$name"+"$lastName"] },
              regex: value,
              options: "i",
            },
          },
        },
      ],
    });
    if(!SearchMembers){
         return res.status(200).json({ message: "not found ", success: true });
    }
     return res.status(200).json({ success: true,SearchMembers });
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "error", error, success: false });
  }
};
export default SearchTeamMember;
