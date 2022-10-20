export default function SummitButton({
  isValid,
  buttonName = "",
  isLoading,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type="summit"
      className="btn btn-primary rounded-xl w-full"
      disabled={!isValid}
    >
      {isLoading ? (
        <>
          <span className="animate-spin h-5 w-5 mr-3 border-r-primary border-4 rounded-full"></span>
          <p>Loading...</p>
        </>
      ) : (
        buttonName
      )}
    </button>
  );
}
