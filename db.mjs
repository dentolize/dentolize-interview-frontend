module.exports = {
  customers: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "555-555-5555",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "444-444-4444",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Brown",
      email: "alice.brown@example.com",
      phone: "333-333-3333",
    },
  ],
  orders: [
    {
      id: 101,
      customer_id: 1,
      orderNumber: "A1001",
      orderDate: new Date("2023-07-10"),
      orderStatus: "Processed",
    },
    {
      id: 102,
      customer_id: 1,
      orderNumber: "A1002",
      orderDate: new Date("2023-07-11"),
      orderStatus: "Shipped",
    },
    {
      id: 103,
      customer_id: 2,
      orderNumber: "B2001",
      orderDate: new Date("2023-07-09"),
      orderStatus: "Pending",
    },
    {
      id: 104,
      customer_id: 3,
      orderNumber: "C3001",
      orderDate: new Date("2023-07-05"),
      orderStatus: "Delivered",
    },
  ],
};
