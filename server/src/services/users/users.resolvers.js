
export default function (Users) {

  const usersResolvers = {
    Users: {
      profile: (user) => {
        return Users.find({ query: { _id: user.owner }}).then(result=> result[0] || result.data[0]);
      }
    }
  };

  return usersResolvers;
}
