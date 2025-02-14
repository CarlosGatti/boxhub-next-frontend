import { Button, ClickTabs, WrapperTabs } from './styles'
import { useEffect, useState } from 'react'

interface TabsProps {
  labelTabs: string[]
  currentTabCheck: (value: string) => void
  checkLabelTab: string
}

export const Tabs = ({
  checkLabelTab,
  labelTabs,
  currentTabCheck,
  ...rest
}: TabsProps) => {
  const [currentValue, setcurrentValue] = useState(checkLabelTab)

  useEffect(() => {
    currentTabCheck(currentValue)
  }, [currentValue])
  return (
    <WrapperTabs>
      <ClickTabs>
        {labelTabs.map((value: string, index: number) => (
          <Button
            {...rest}
            key={index}
            onClick={() => setcurrentValue(value)}
            check={currentValue === value}
          >
            {value}
          </Button>
        ))}
      </ClickTabs>
    </WrapperTabs>
  )
}
