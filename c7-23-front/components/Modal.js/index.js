export default function Modal({
  title,
  children,
  showModal,
  setShowModal,
  showClose = true,
}) {
  return (
    showModal && (
      <div className="modal z-50 visible pointer-events-auto opacity-100">
        <div className="modal-box max-h-screen h-auto relative overflow-y-auto">
          {showClose && (
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2 "
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          )}
          <h3 className="text-lg font-bold text-center mt-3">{title}</h3>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    )
  );
}
