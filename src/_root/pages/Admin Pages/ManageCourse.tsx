import React, { useState, ReactNode } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Spacer,
  Flex,
  Button,
  Center,
  Link,
} from "@chakra-ui/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit as EditIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const courseData = [
  {
    courseCode: "CS101",
    courseName: "Introduction to Computer Science",
    department: "Computer Science",
    level: 1,
    type: "T",
    assignedLecturer: "John Doe",
    courseUnits: 3,
    teachingHours: 40,
    outstandingHours: 0,
    semester: 1,
  },
  {
    courseCode: "MATH101",
    courseName: "Calculus I",
    department: "Mathematics",
    level: 1,
    type: "T",
    assignedLecturer: "Jane Smith",
    courseUnits: 4,
    teachingHours: 60,
    outstandingHours: 2,
    semester: 1,
  },
  // More course data objects
];

interface StyledTextProps {
  children: ReactNode;
  className?: string;
}

const PAGE_SIZE = 7;

const ManageCourses = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const filteredRows = courseData.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );


  const currentData = filteredRows.slice(
    (currentPage - 1) * PAGE_SIZE,
    Math.min((currentPage - 1) * PAGE_SIZE + PAGE_SIZE + 1, filteredRows.length)
  );

  

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAdd = () => {
    navigate('/AddNewCourse')
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  
  const totalRows = Math.ceil(filteredRows.length / PAGE_SIZE);
  const totalPages = Math.max(totalRows, 1);

  return (
    <div className="">
    <div className="flex flex-row">
      <h1 className="h2-bold py-14 px-16 text-blue-600">Manage Lecturers</h1>
    </div>
    <div className="bg-white rounded p-6">
      <Box mb="1rem">
        <Flex justify="space-between" align="center">
          <InputGroup w="50%">
            <InputLeftAddon children="Search:" />
            <Input
              value={searchValue}
              onChange={handleSearch}
              placeholder="Type something to search..."
            />
          </InputGroup>
          <Link href="#">
            <Center>
              <Button className="shad-button_primary mt-4 w-40" onClick={handleAdd}>Add</Button>
            </Center>
          </Link>
        </Flex>
        <ScrollArea style={{ height: '500px', width: '1230px' }} >
          <ScrollBar orientation="vertical" className="w-2 fill-black"/>
        <TableContainer overflowY="auto">
          {searchValue ? (
            <Table variant="striped" colorScheme="gray" className="min-w-full divide-y divide-gray-300">
              <Thead>
                <Tr>
                <Th className="px-6 py-3 whitespace-nowrap">Code</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Name</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Department</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Level</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Type</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Lecturer</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Units</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">TH</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">OH</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Semester</Th>
                  <Th className="px-6 py-3 whitespace-nowrap"></Th>
                </Tr>
              </Thead>
              <Tbody>
                  {filteredRows.map(({ courseCode, courseName, department, level, type, assignedLecturer, courseUnits, teachingHours, outstandingHours, semester }, index) => (
                  <Tr key={index}>
                      <Td className="px-6 py-4 whitespace-nowrap">{courseCode}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{courseName}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{department}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{level}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{type}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{assignedLecturer}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{courseUnits}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{teachingHours}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{outstandingHours}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{semester}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      <Spacer />
                      <Flex
                        className=""
                        justify="space-between"
                        align="center"
                      >
                        <Button
                          variant="ghost"
                          leftIcon={<EditIcon />}
                          size="xs"
                        ></Button>

                        <Button
                          variant="ghost"
                          leftIcon={<DeleteIcon />}
                          size="xs"
                        ></Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
              <Table variant="striped" colorScheme="gray" className="min-w-full divide-y divide-gray-300">
                <Thead>
                  <Tr>
                    <Th className="px-6 py-3 whitespace-nowrap">Code</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Name</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Department</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Level</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Type</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Lecturer</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Units</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">TH</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">OH</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Semester</Th>
                    <Th className="px-6 py-3 whitespace-nowrap"></Th>
                </Tr>
              </Thead>
              <Tbody>
              {currentData.map(({ courseCode, courseName, department, level, type, assignedLecturer, courseUnits, teachingHours, outstandingHours, semester }, index) => (
                  <Tr key={index}>
                    <Td className="px-6 py-4 whitespace-nowrap">{courseCode}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{courseName}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{department}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{level}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{type}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{assignedLecturer}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{courseUnits}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{teachingHours}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{outstandingHours}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{semester}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      <Spacer />
                      <Flex
                        className=""
                        justify="space-between"
                        align="center"
                      >
                        <Button
                          variant="ghost"
                          leftIcon={<EditIcon />}
                          size="xs"
                        ></Button>

                        <Button
                          variant="ghost"
                          leftIcon={<DeleteIcon />}
                          size="xs"
                        ></Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </TableContainer>
        <ScrollBar orientation="horizontal" className="w-2 fill-black"/>
      </ScrollArea>

        {searchValue && !filteredRows.length && (
          <div className="text-red-500 text-sm mx-auto mt-2">No Matches Found.</div>
        )}

        <Flex
          className="justify-between items-center my-4"
          justify="space-between"
          align="center"
        >
          <Button
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            variant="link"
            size="xs"
          >
            {"<< Previous"}
          </Button>
          <div>
            <StyledText>{`Page ${currentPage} of ${totalPages}`}</StyledText>
          </div>
          <Button
            disabled={currentPage >= totalPages}
            onClick={handleNextPage}
            variant="link"
            size="xs"
          >
            {"Next >>"}
          </Button>
        </Flex>
      </Box>
    </div>
  </div>
  );
};

const StyledText: React.FC<StyledTextProps> = ({ children, className }) => {
  return <div className={`inline-block text-gray-500 font-medium ${className}`}>{children}</div>;
};

StyledText.propTypes = {
  /** Children nodes passed to the component */
  children: PropTypes.node.isRequired,
  /** Classes passed to the component */
  className: PropTypes.string,
};

export default ManageCourses;