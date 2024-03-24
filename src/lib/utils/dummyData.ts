interface StaffMember {
    id: number;
    name: string;
    email: string;
    department: string;
  }
  
  const DUMMY_DATA: StaffMember[] = Array.from(Array(100).keys()).map((_, index) => ({
    id: index + 1,
    name: `Staff Member ${index + 1}`,
    email: `staff${index + 1}@example.com`,
    department: `${index % 3 === 0 ? "IT" : index % 3 === 1 ? "HR" : "Finance"}`,
  }));
  
  export default DUMMY_DATA;