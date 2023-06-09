import NiceModal, { useModal } from '@ebay/nice-modal-react'
import type { ModalProps } from 'antd'
import { Modal } from 'antd'
import type { FC } from 'react'

const AntDModal: FC<ModalProps> = (props) => {
  const { children, title, onOk } = props
  const modal = useModal()
  return (
    <Modal
      title={title}
      onOk={(e) => {
        onOk && onOk(e)
        modal.hide()
      }}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}>
      {children}
    </Modal>
  )
}
export default NiceModal.create(AntDModal)
