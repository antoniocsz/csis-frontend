import Link from 'next/link'
import styled from 'styled-components'

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;

  padding-left: 12px;

  flex: 1;
  overflow: hidden;
  scroll-behavior: smooth;
`

export const ItemContainer = styled.div`
  border-bottom: 1px solid #c4c4c4;
`

export const SubItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding: 0.25rem; */
`

export const ItemTitle = styled(Link)`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 24px;
  padding: 8px 0;
  margin: 0;
  color: #fff;
`

export const ItemSubtitle = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #fff;
`

export const Content = styled.main`
  display: flex;

  flex-direction: row;
  flex: 1;
`

export const Wrapper = styled.main`
  display: flex;
  flex: 5;
  padding-left: 12px;

  background-color: #2c2c2c;
  flex-direction: column;
`
