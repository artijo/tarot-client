import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  function ShowQuetion({ quetion }) {
    return (
      <Dialog>
        <DialogTrigger>ดูคำตอบ</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>คำถามและคำตอบจากหมอดู</DialogTitle>
            <DialogDescription>
            ผลคำทำนายนี้ อาจจะไม่ตรงกับความเชื่อของท่าน และเป็นเพียงการทำนายเท่านั้น ไม่สามารถใช้เพื่อการตัดสินใจในเรื่องใดๆ ทั้งสิ้น โปรดใช้วิจารณญาณในการตัดสินใจในเรื่องที่สำคัญ
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm">
                      <h6>คำถาม</h6>
                        <p className="text-sm">{quetion[0].question}</p>
                        <h6>คำตอบ</h6>
                        {
                            quetion[0].asn ? <p className="text-sm">{quetion[0].asn}</p> : <p className="text-sm text-red-600">หมอดูยังไม่ตอบค่ะ</p>
                        }
                      </div>
        </DialogContent>
      </Dialog>
    );
  }

    export default ShowQuetion;