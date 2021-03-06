import React from 'react';
import {
  DataTable,
  OverflowMenu,
  OverflowMenuItem,
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'carbon-components-react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TableHeader } = DataTable;

const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const Users = ({ users, deleteModalState, toggleDeleteModal, handleDelete }) => (
  <>
    <Title>Users</Title>
    <DataTable
      rows={users}
      headers={[
        { header: 'First Name', key: 'firstName' },
        { header: 'Last Name', key: 'lastName' },
        { header: 'Email', key: 'email' },
        { header: 'Created', key: 'created' },
        { header: 'Updated', key: 'updated' },
        { header: 'Actions', key: 'delete' }
      ]}
      isSortable
      useZebraStyles
      render={({ rows, headers, getHeaderProps, getTableProps }) => (
        <StyledTableContainer>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map(header => {
                  if (header.key === 'delete') return <TableHeader key={header.key} isSortable={false} />;
                  return <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  {row.cells.map(cell => {
                    switch (cell.info.header) {
                      case 'delete':
                        return (
                          <TableCell key={cell.id}>
                            <OverflowMenu>
                              <OverflowMenuItem itemText="Delete" onClick={() => toggleDeleteModal(true, row)} />
                            </OverflowMenu>
                          </TableCell>
                        );
                      case 'created':
                        return <TableCell key={cell.id}>{dayjs(cell.value).format('MM-DD-YYYY HH:mm')}</TableCell>;
                      case 'updated':
                        return <TableCell key={cell.id}>{dayjs(cell.value).format('MM-DD-YYYY HH:mm')}</TableCell>;
                      default:
                        return <TableCell key={cell.id}>{cell.value}</TableCell>;
                    }
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}
    />
    <ComposedModal open={deleteModalState} onClose={() => toggleDeleteModal(false)}>
      <ModalHeader buttonOnClick={() => toggleDeleteModal(false)}>
        <Title>Removing User</Title>
      </ModalHeader>
      <ModalBody>
        <p>Are you sure you want to delete this user?</p>
      </ModalBody>
      <ModalFooter>
        <Button kind="secondary" onClick={() => toggleDeleteModal(false)}>
          Cancel
        </Button>
        <Button kind="danger" onClick={() => handleDelete()}>
          Delete
        </Button>
      </ModalFooter>
    </ComposedModal>
  </>
);

export default Users;
