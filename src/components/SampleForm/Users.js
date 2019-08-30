import React from 'react';
import { DataTable } from 'carbon-components-react';
import styled from 'styled-components';

const { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TableHeader } = DataTable;

const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Users = ({ users }) => (
  <div>
    <Title>Users</Title>
    <DataTable
      rows={users}
      headers={[
        { header: 'First Name', key: 'firstName' },
        { header: 'Last Name', key: 'lastName' },
        { header: 'Email', key: 'email' }
      ]}
      isSortable
      useZebraStyles
      render={({ rows, headers, getHeaderProps, getTableProps }) => (
        <StyledTableContainer>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.value}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}
    />
  </div>
);

export default Users;
