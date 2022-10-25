const Greeting = () => {
  const currentHour = new Date().getHours();
  let time;

  switch (true) {
    case currentHour < 12: {
      time = "morning";
      break;
    }

    case currentHour < 18: {
      time = "afternoon";
      break;
    }

    default: {
      time = "night";
      break;
    }
  }

  return <div>{`Good ${time}, Ryan`}</div>;
};
export { Greeting };
