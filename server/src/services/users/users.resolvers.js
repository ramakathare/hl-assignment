
export default function (profiles) {

  const usersResolvers = {
    Users: {
      profile: (user) => {
        return profiles.find({ query: { _id: user.owner }}).then(result=> result[0]);
      }
    }
  };

  return usersResolvers;
}
