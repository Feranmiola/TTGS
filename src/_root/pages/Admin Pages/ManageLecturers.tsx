import React, { useState, ReactNode } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
  Spacer,
  Flex,
  Button,
  Center,
  Link,
} from "@chakra-ui/react";
import Highlighter from "react-highlight-words";
import ColumnFilter from "./ColumnFilter";
import PropTypes from "prop-types";
import { Column } from "react-table";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit as EditIcon } from "@mui/icons-material";

const lecturersData = [
  {
    staffId: "21/2211",
    name: "Owen Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Owen Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  {
    staffId: "21/2211",
    name: "Brown Cindy Vazquez",
    email: "mary.johnson@company.com",
    department: "Software Engineering",
  },
  // ... other data
];

interface StyledTextProps {
  children: ReactNode;
  className?: string;
}

const PAGE_SIZE = 7;

const ManageLecturers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = lecturersData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  interface Column {
    Header: string;
    accessor: string;
    Cell?: ({ value }: { value: string }) => JSX.Element;
  }

  const columns: Column[] = [
    {
      Header: "Staff ID",
      accessor: "staffId",
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ value }: { value: string }) => (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchValue]}
          autoEscape={true}
          textToHighlight={value?.toString()}
        />
      ),
    },
    {
      Header: "Email",
      accessor: "email",
      Cell: ({ value }: { value: string }) => (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchValue]}
          autoEscape={true}
          textToHighlight={value?.toString()}
        />
      ),
    },
    {
      Header: "Department",
      accessor: "department",
      Cell: ({ value }: { value: string }) => (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchValue]}
          autoEscape={true}
          textToHighlight={value?.toString()}
        />
      ),
    },
  ];

  const filteredRows = lecturersData.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRows.length / PAGE_SIZE);

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
                <Button className="shad-button_primary mt-4 w-40">Add</Button>
              </Center>
            </Link>
          </Flex>

            <TableContainer overflowY="auto">
              <Table variant="striped" colorScheme="gray" className="min-w-full divide-y divide-gray-300">
                <Thead>
                  <Tr>
                  <Th className="px-6 py-3 whitespace-nowrap">Staff ID</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Name</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Email</Th>
                  <Th className="px-6 py-3 whitespace-nowrap">Department</Th>
                  <Th className="px-6 py-3 whitespace-nowrap"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentData.map(({ staffId, name, email, department }, index) => (
                    <Tr key={index}>
                    <Td className="px-6 py-4 whitespace-nowrap">{staffId}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[searchValue]}
                        autoEscape={true}
                        textToHighlight={name}
                      />
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[searchValue]}
                        autoEscape={true}
                        textToHighlight={email}
                      />
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[searchValue]}
                        autoEscape={true}
                        textToHighlight={department}
                      />
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
          </TableContainer>

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

export default ManageLecturers;