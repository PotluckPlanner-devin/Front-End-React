user = {
  id: "",
  username: "",
  password: "",
  email: "",
  phone: "",
  user_events: [
    {
      id: "",
      name: "",
      date: "",
      time: "",
      location: "",
      responded: false,
      attending: false,
      hosting: false,
      assigned_food: [
        {
          id: "",
          name: ""
        }
      ]
    }
  ]
};

event = {
  id: "",
  name: "",
  date: "",
  time: "",
  location: "",
  host_id: "",
  host_username: "",
  attendants: [
    {
      id: "",
      username: "",
      responded: false,
      attending: false
    }
  ],
  food: [
    {
      id: "",
      name: "",
      assigned: false,
      assigned_id: "",
      assigned_username: "",
      assigned_email: "",
      assigned_phone: ""
    }
  ]
};
