import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function ShowPredictsixcate({ prediction }) {
  return (
    <Dialog>
      <DialogTrigger>ดูคำทำนาย</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>คำทำนายของคุณ</DialogTitle>
          <DialogDescription>
          ผลคำทำนายนี้ อาจจะไม่ตรงกับความเชื่อของท่าน และเป็นเพียงการทำนายเท่านั้น ไม่สามารถใช้เพื่อการตัดสินใจในเรื่องใดๆ ทั้งสิ้น โปรดใช้วิจารณญาณในการตัดสินใจในเรื่องที่สำคัญ
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm">
                    <h6>ความรัก</h6>
                    <p className="text-sm"><strong>สำหรับคนโสด </strong>{prediction.love.single}</p>
                    <p className="text-sm"><strong>สำหรับคนมีคู่ </strong>{prediction.love.loveCouples}</p>
                    <h6>การงาน</h6>
                    <p className="text-sm">{prediction.career}</p>
                    <h6>การเงิน</h6>
                    <p className="text-sm">{prediction.finance}</p>
                    <h6>การเรียน</h6>
                    <p className="text-sm">{prediction.education}</p>
                    <h6>สุขภาพ</h6>
                    <p className="text-sm">{prediction.health}</p>
                    <h6 className="text-sm">การเดินทาง</h6>
                    <p className="text-sm">{prediction.travelLuck}</p>
                    </div>
      </DialogContent>
    </Dialog>
  );
}

export default ShowPredictsixcate;