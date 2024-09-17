import SuccessMessage from "../../_components/SuccessMessage";
const SuccessPage = ({ params }: { params: { tranId: string } }) => {
  const { tranId } = params;
  return (
    <div className="my-20">
      <SuccessMessage tranId={tranId}></SuccessMessage>
    </div>
  );
};

export default SuccessPage;
