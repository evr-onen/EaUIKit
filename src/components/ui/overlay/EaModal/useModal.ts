import { ref, computed } from 'vue'

export interface ModalState {
  isOpen: boolean
  title?: string
  content?: string
  size?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  maskClosable?: boolean
  showFooter?: boolean
  // Lifecycle callbacks
  onOpen?: () => void | Promise<void>
  onClose?: () => void | Promise<void>
  onBeforeOpen?: () => void | Promise<void>
  onBeforeClose?: () => void | Promise<void>
  onAfterOpen?: () => void | Promise<void>
  onAfterClose?: () => void | Promise<void>
}

const modalState = ref<ModalState>({
  isOpen: false,
  title: '',
  content: '',
  size: 'auto',
  closable: true,
  maskClosable: true,
  showFooter: false
})

export const useModal = () => {
  // Open modal with options
  const openModal = async (options: Partial<ModalState> = {}) => {
    // Execute beforeOpen callback
    if (options.onBeforeOpen) {
      await options.onBeforeOpen()
    }

    modalState.value = {
      ...modalState.value,
      ...options,
      isOpen: true
    }

    // Execute onOpen callback after state is set
    if (options.onOpen) {
      await options.onOpen()
    }
  }

  // Close modal
  const closeModal = async () => {
    // Execute beforeClose callback
    if (modalState.value.onBeforeClose) {
      await modalState.value.onBeforeClose()
    }

    modalState.value.isOpen = false

    // Execute onClose callback after state is set
    if (modalState.value.onClose) {
      await modalState.value.onClose()
    }
  }

  // Toggle modal
  const toggleModal = async () => {
    if (modalState.value.isOpen) {
      await closeModal()
    } else {
      await openModal(modalState.value)
    }
  }

  // Quick modal methods with predefined callbacks
  const showConfirmModal = (
    title: string,
    content: string,
    onConfirm?: () => void | Promise<void>,
    onCancel?: () => void | Promise<void>
  ) => {
    return openModal({
      title,
      content,
      size: 'auto',
      closable: true,
      maskClosable: false,
      showFooter: true,
      onOpen: () => console.log('Confirm modal opened'),
      onClose: onCancel
    })
  }

  const showAlertModal = (
    title: string,
    content: string,
    onOk?: () => void | Promise<void>
  ) => {
    return openModal({
      title,
      content,
      size: 'auto',
      closable: true,
      maskClosable: true,
      showFooter: true,
      onOpen: () => console.log('Alert modal opened'),
      onClose: onOk
    })
  }

  // Computed properties
  const isOpen = computed(() => modalState.value.isOpen)
  const title = computed(() => modalState.value.title)
  const content = computed(() => modalState.value.content)
  const size = computed(() => modalState.value.size)
  const closable = computed(() => modalState.value.closable)
  const maskClosable = computed(() => modalState.value.maskClosable)
  const showFooter = computed(() => modalState.value.showFooter)

  return {
    // State
    modalState,

    // Actions
    openModal,
    closeModal,
    toggleModal,

    // Quick methods
    showConfirmModal,
    showAlertModal,

    // Computed
    isOpen,
    title,
    content,
    size,
    closable,
    maskClosable,
    showFooter
  }
}
