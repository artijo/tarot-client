import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/contextAuth";
import { hostname } from "../config";
import AdminLayout from "../Layouts/adminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Textarea } from "@/components/ui/textarea"
  

function AnswerPredict() {
  const { currentUser } = useAuth();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");

  function getAnswer() {
    axios
      .get(`${hostname}/private/getall`)
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateAnswer(id) {
    axios
      .put(`${hostname}/private/update`, {
        _id:id,
        email: currentUser.email,
        answer: answer,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

  useEffect(() => {
    getAnswer();
  }, []);

  return (
    <AdminLayout>
      <Card className="max-w-prose mx-auto">
        <CardHeader>
          <CardTitle>คำทำนายส่วนตัว</CardTitle>
          <CardDescription>คำถามที่ยังไม่ได้ตอบ</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="date">คำถามที่</Label>
          {question &&
            question.map((item, index) => (
              <div key={item._id}>
                {/* fillter if item.massage[0].ans = '' not show */}
                {item.massage[0].asn === "" && (
    <div>
        <p>คำถามที่ {index+1} : {item.massage[0].question}</p>

                    <Dialog>
  <DialogTrigger><Button>ตอบคำถาม</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>ตอบคำถาม</DialogTitle>
      <DialogDescription>
      {item.massage[0].question}
      </DialogDescription>
    </DialogHeader>
    <Label htmlFor="question"><strong>คำถาม</strong></Label>
    <span>{item.massage[0].question}</span>
    
    <Label htmlFor="answer">คำตอบ</Label>
    <Textarea
      className="w-full h-32"
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    ></Textarea>
    <Button
      onClick={() => {
        updateAnswer(item._id);
      }}
    >
        ตอบคำถาม
    </Button>
  </DialogContent>
</Dialog>

                  </div>
                )}
              </div>
            ))}
        </CardContent>
        <CardFooter>
          {/* <Button
                  className="ml-4"
                  onClick={() => {
                    doSignOut()
                    .then(navigate("/"));
                  }}
                  variant="secondary"
                >
                  Logout
                </Button> */}
        </CardFooter>
      </Card>
    </AdminLayout>
  );
}

export default AnswerPredict;
