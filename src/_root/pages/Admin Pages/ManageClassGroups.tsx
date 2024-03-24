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

const lecturersData = [
  {
    classLevel: "100",
    classLabel: "A",
    classSize: "80",
    department: "Software Engineering",
  },
  {
    classLevel: "100",
    classLabel: "A",
    classSize: "80",
    department: "Software Engineering",
  },
  {
    classLevel: "100",
    classLabel: "A",
    classSize: "80",
    department: "Software Engineering",
  },
  {
    classLevel: "100",
    classLabel: "A",
    classSize: "80",
    department: "Software Engineering",
  },
  {
    classLevel: "100",
    classLabel: "A",
    classSize: "80",
    department: "Software Engineering",
  },
  {
    classLevel: "100",
    classLabel: "A",
    classSize: "80",
    department: "Software Engineering",
  },
  // ... other data
];

interface StyledTextProps {
  children: ReactNode;
  className?: string;
}

const PAGE_SIZE = 7;

const ManageClassGroup = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const filteredRows = lecturersData.filter((row) =>
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
    navigate('/AddNewClassGroups')
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  
  const totalRows = Math.ceil(filteredRows.length / PAGE_SIZE);
  const totalPages = Math.max(totalRows, 1);

  return (
    <div className="">
    <div className="flex flex-row">
      <h1 className="h2-bold py-14 px-16 text-blue-600">Manage Ckass Groups</h1>
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
        <ScrollArea style={{ height: '500px', width: '100%' }} >
          <ScrollBar orientation="vertical" className="w-2 fill-black"/>
        <TableContainer overflowY="auto">
          {searchValue ? (
            <Table variant="striped" colorScheme="gray" className="min-w-full divide-y divide-gray-300">
              <Thead>
                <Tr>
                  <Th className="px-6 py-3 whitespace-nowrap">Class Level</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Class Label</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Class Size</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Department</Th>
                  <Th className="px-6 py-3 whitespace-nowrap"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredRows.map(({ classLevel, classLabel, classSize, department }, index) => (
                  <Tr key={index}>
                      <Td className="px-6 py-4 whitespace-nowrap">{classLevel}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">
                      {classLabel && <span>{classLabel}</span>}
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {classSize && <span>{classSize}</span>}
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {department && <span>{department}</span>}
                    </Td>
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
                  <Th className="px-6 py-3 whitespace-nowrap">Class Level</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Class Label</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Class Size</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Department</Th>
                  <Th className="px-6 py-3 whitespace-nowrap"></Th>
                </Tr>
              </Thead>
              <Tbody>
              {currentData.map(({ classLevel, classLabel, classSize, department }, index) => (
                  <Tr key={index}>
                    <Td className="px-6 py-4 whitespace-nowrap">{classLevel}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{classLabel}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{classSize}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {department}
                    </Td>
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

export default ManageClassGroup;