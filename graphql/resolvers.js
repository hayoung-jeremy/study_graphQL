const person = {
  name: "hayoung",
  age: 31,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => person,
  },
};

export default resolvers;
