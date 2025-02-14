import {
  About,
  Contract,
  Document,
  IconDocument,
  InfoDocument,
  PersonalDocuments,
  TextCopy,
  WrapperContract,
  WrapperDescription
} from './styles'

import { BsFileEarmarkCheck } from 'react-icons/bs'
import { Button } from '../../_ui/Button'
import { ContainerMain } from '../containerMain'
import { DownloadButton } from '../../_ui/ButtonIcon/Download'
import { Input } from '../../_ui/Input/textInput'
import { MdOutlineContentCopy } from 'react-icons/md'
import { useState } from 'react'

export const Documents = () => {
  const [copySuccess, setCopySuccess] = useState('Copiar texto')
  const copyText = () => {
    const copyText = document.getElementById('wrapperCopy') as HTMLInputElement
    copyText.select()
    /*  copyText.setSelectionRange(0, 99999)   */
    void navigator.clipboard.writeText(copyText.value)
    /* alert('Copied the text: ' + copyText.value) */
    setCopySuccess('Texto copiado')
    setTimeout(function () {
      setCopySuccess('Copiar texto')
    }, 5000)
  }
  return (
    <>
      {/* <ContainerMain title="Contrato">
        <WrapperDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt labore et dolore magna aliqua.
        </WrapperDescription>

        <WrapperContract>
          <Contract>
            <div>
              <BsFileEarmarkCheck />
            </div>
            <span>
              Contrato - <i>clique para baixar</i>
            </span>
          </Contract>
          <DownloadButton description="download nota fiscal" />
        </WrapperContract>
      </ContainerMain> */}
      <ContainerMain title="Documents">
      <Button>Add Documents</Button>
        <PersonalDocuments>
          <Document>
            <div>
              <IconDocument>RG</IconDocument>
              <InfoDocument>
                <p>RG: 9999999</p>
              </InfoDocument>
            </div>
            <DownloadButton description="download RG" />
          </Document>

          <Document>
            <div>
              <IconDocument>CPF</IconDocument>
              <InfoDocument>
                <p>CPF: 99999999</p>
              </InfoDocument>
            </div>
            <DownloadButton description="download CPF" />
          </Document>

          <Document>
            <div>
              <IconDocument>CNH</IconDocument>
              <InfoDocument>
                <p>CNH: 98765432198</p>
              </InfoDocument>
            </div>
            <DownloadButton description="download CPF" />
          </Document>

          <Document>
            <div>
              <IconDocument>CR</IconDocument>
              <InfoDocument>
                <p>Rua Fulano, 123 - Praíso</p>
              </InfoDocument>
            </div>
            <DownloadButton description="download CPF" />
          </Document>
        </PersonalDocuments>
      </ContainerMain>

      {/* <ContainerMain title="Dados da empresa">
        <TextCopy>
          <Input
            id="wrapperCopy"
            label="CNPJ"
            disabled
            value="12.345.678/0001-99"
          />
          <button aria-label="copiar cnpj" onClick={() => copyText()}>
            <span>{copySuccess}</span>
            <MdOutlineContentCopy />
          </button>
        </TextCopy>

        <Input
          label="Nome da empresa"
          disabled
          value="Consultech Consultoria Tecnológica"
        />
        <Input label="Telefone para contato" disabled value="21 98765 4321" />
        <Input
          label="E-mail para contato"
          disabled
          value="contato@consultech.com"
        />
        <Input label="Site" disabled value="www.consultech.com" />
        <Input label="Redes sociais" disabled value="www.consultech.com" />
        <Input disabled value="www.consultech.com" />
        <Input disabled value="www.consultech.com" />
        <Input disabled value="www.consultech.com" />
        <About>
          <span>Descrição</span>
          <p>
            Nunc sagittis ut dui laoreet condimentum. Nullam porttitor suscipit
            dolor, non hendrerit leo rhoncus sed. Mauris purus orci, pretium
            eget placerat in
          </p>
        </About>
      </ContainerMain> */}
    </>
  )
}
