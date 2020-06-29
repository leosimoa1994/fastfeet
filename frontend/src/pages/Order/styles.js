import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  margin-top: 50px;
`;

export const TableOrder = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  thead {
    border: 0;
    padding: 5px;

    th {
      font-size: 16px;
      padding: 15px 20px;
    }
  }

  tbody {
    border: 0;
    padding: 5px;

    tr {
      border-bottom: 10px solid #eee;

      td {
        color: #888;
        border-radius: 4px;
        border: 0;
        padding: 10px 15px;
        background: #fff;
      }
    }
  }
`;

export const Action = styled.th`
  text-align: right;
  margin-right: 5px;
  width: 50px;
`;
