import styled from 'styled-components'

interface ProgressBarProps {
  percentage: number
}

export const Container = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 8px;
  background-color: #c1c1c1;
  margin-top: 16px;
`

export const Progress = styled.div<ProgressBarProps>`
  height: 100%;
  width: ${({ percentage }) => percentage || 0}%;
  background-color: var(--color-link);
`
