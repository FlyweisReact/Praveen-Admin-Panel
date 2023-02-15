import React from 'react'
import styled from 'styled-components'
import HistoryTable from './HistoryTable'
import HOC from '../../Common/HOC'

const History = () => {
  return (
    <>
        <Containers>
            <TableWrapper>
                <span>History</span>
                <HistoryTable/>
            </TableWrapper>
        </Containers>
    </>
  )
}

export default HOC(History)

const Containers = styled.div`
    width: 100%;
    height: 650px;
    margin: 70px 10px;
    overflow-y: auto;
    overflow-x: hidden;
`

const TableWrapper = styled.div`
    width: 100%;
    padding: 20px;
    span{
        color: #2b1616;
        font-size: 1.3rem;
    }

`