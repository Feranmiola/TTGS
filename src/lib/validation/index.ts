import * as z  from "zod"


export const SignupValidationSchema = z.object({
    name: z.string().min(2, {message : "too short" }),
    username: z.string().min(2, {message : "too short" }),
    email: z.string().email(),
    password: z.string().min(8, {message : "Password must be at least 8 characters" }),
  })

  export const SigninValidationSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

export const AddNewClassGroupSchema = z.object({
    class_level: z.number().min(3).max(3),
    class_label: z.string().min(0).max(1),
    class_size: z.number().min(3),
    class_department: z.string(),
  })

  export const AddNewLecturerSchema = z.object({
    staff_id: z.string().min(7).max(7),
    name: z.string(),
    email: z.string().email(),
    school: z.string(),
    department: z.string(),
    password: z.string(),
  })

  export const AddNewDepartmentSchema = z.object({
    code: z.string().min(1).max(6),
    name: z.string(),
    school: z.string(),
  })

  export const AddNewLectureHallSchema = z.object({
    code: z.string().min(1),
    capacity: z.number(),
    hall_type_lab: z.string(),
    school: z.string(),
  })

  export const AddNewCourseSchema = z.object({
    code: z.string().min(1),
    name: z.string(),
    department: z.string(),
    department1: z.string(),
    course_type_lab: z.string(),
    lecturer: z.string(),
  })