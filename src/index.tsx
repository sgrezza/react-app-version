import * as React from 'react'
const version = process.env.REACT_APP_VERSION || 'dev'
const gitLink = process.env.REACT_APP_GIT_URL

interface Props {
  textStyles?: React.CSSProperties
  openNewTab?: boolean
}
export const VersionComponent = ({
  textStyles = {},
  openNewTab = true
}: Props) => {
  const link = React.useMemo(() => {
    if (gitLink && gitLink.includes('gitlab')) {
      return gitLink + '/-/tags/' + version
    } else {
      return undefined
    }
  }, [])
  return (
    <a style={textStyles} href={link} target={openNewTab ? '_blank' : '_self'}>
      {version}
    </a>
  )
}
