import * as z  from "zod"


export const StudentSignupValidationSchema = z.object({
    firstName: z.string().min(2, {message : "too short" }),
    lastName: z.string().min(2, {message : "too short" }),
    email: z.string().email(),
    department: z.string(),
    classGroup: z.string().max(1, {message: "Your Class Group is only one Alphabet"}),
    level: z.string(),
    password: z.string().min(8, {message : "Password must be at least 8 characters" }),
  })

  export const StaffSignupValidationSchema = z.object({
    firstName: z.string().min(2, {message : "too short" }),
    lastName: z.string().min(2, {message : "too short" }),
    email: z.string().email(),
    department: z.string(),
    course: z.string(),
    password: z.string().min(8, {message : "Password must be at least 8 characters" }),
  })

  export const SigninValidationSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

export const AddNewClassGroupSchema = z.object({
    class_level: z.string().min(3).max(3),
    class_label: z.string().min(0).max(1),
    class_size: z.string(),
    class_department: z.string(),
  })

  export const AddNewLecturerSchema = z.object({
    staff_id: z.string().min(7).max(7),
    name: z.string(),
    email: z.string().email(),
    
    department: z.string(),
    password: z.string(),
  })

  export const AddNewDepartmentSchema = z.object({
    code: z.string().min(1).max(6),
    name: z.string(),    
  })

  export const AddNewLectureHallSchema = z.object({
    code: z.string().min(1),
    capacity: z.string(),
    hall_type_lab: z.string(),
    
  })

  export const AddNewCourseSchema = z.object({
    code: z.string().min(1),
    name: z.string(),
    department: z.string(),
    level: z.string(),
    course_type_lab: z.string(),
    lecturer: z.string(),
    units : z.string().max(1, {message:"You cant have double digit units"}),
    teachingHours :z.string(),
    outstandingHours :z.string(),
    semester:z.string()
  })

  export const AddNewPreference = z.object({
    staffid: z.string().min(1),
    preference: z.string(),
    department: z.string(),
    
  })