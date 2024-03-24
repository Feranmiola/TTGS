import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

interface Props {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const ColumnFilter: React.FC<Props> = ({ searchTerm, onSearch }) => {
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    onSearch(e.currentTarget.value);
  };

  return (
    <Input
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
      size="xs"
      variant="filled"
    />
  );
};

ColumnFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default ColumnFilter;