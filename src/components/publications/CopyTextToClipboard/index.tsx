import { Container } from './styles'
import { toast } from 'react-toastify'

interface CopyTextToClipboardProps {
  textToCopy: string
  children: JSX.Element | JSX.Element[]
  messageSuccess: string
}
export const CopyTextToClipboard = ({
  textToCopy,
  children,
  messageSuccess,
}: CopyTextToClipboardProps) => {
  const copyText = () => {
    const copyText = document.getElementById('wrapperCopy') as any
    copyText.select()
    /*  copyText.setSelectionRange(0, 99999)   */
    void navigator.clipboard.writeText(copyText.value)
    toast.success(messageSuccess)
    setTimeout(function () {}, 5000)
  }
  return (
    <Container>
      <textarea name="" id="wrapperCopy" value={textToCopy} readOnly />
      <button aria-label="copiar" onClick={() => copyText()}>
        {children}
      </button>
    </Container>
  )
}
