import {
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef
} from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    else if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto bg-white rounded-xl max-w-5xl w-full max-h-[90vh] backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="w-5 h-5" aria-hidden="true"></div>
          <h2 id={titleId} className="text-2xl font-semibold">
            {title}
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <CloseIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  )
}

function CloseIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.0938 0.90625L0.90625 13.0938M0.90625 0.90625L13.0938 13.0938"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Modal
