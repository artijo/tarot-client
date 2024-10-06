import UserLayout from "../Layouts/userLayout";
import { useAuth } from "../context/contextAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { doSignOut } from "../firebase/firebase_login";
import { hostname } from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowPredictsixcate from "../components/ShowPredictsixcate";
import { useNavigate } from "react-router-dom";
import ShowQuetion from "../components/ShowQuetion";

function Profile() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [prediction, setPrediction] = useState(null);
  const [question, setQuestion] = useState(null);

  function handdleDeletePredictionSixCategory(id) {
    axios
      .delete(`${hostname}/sixCategory/prediction`, {
        data: {
          predictionId: id,
        },
      })
      .then((res) => {
        setPrediction(prediction.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getAnswer() {
    axios
      .get(`${hostname}/private/getallbyuser`,{
        params: {
          email: currentUser.email,
        },
      })
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if(!currentUser) navigate("/login");
    if (currentUser) {
      axios
        .post(`${hostname}/sixCategory/prediction/user`, {
          email: currentUser.email,
        })
        .then((res) => {
          res.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPrediction(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
        getAnswer();
    }

  }, []);
  return (
    <UserLayout>
      <div className="container mx-auto text-white">
        <h1 className="text-center">Profile</h1>
        <Tabs
          defaultValue="account"
          className="container mx-auto sm:max-w-[680px]"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="tarot6">ประวัติการดูดวง 6 หมวดหมู่</TabsTrigger>
            <TabsTrigger value="privateq">ประวัติการถามคำถามส่วนตัว</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <p>{currentUser && currentUser.displayName}</p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <p>{currentUser &&currentUser.email}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="ml-4"
                  onClick={() => {
                    doSignOut()
                    .then(navigate("/"));
                  }}
                  variant="secondary"
                >
                  Logout
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="tarot6">
            <Card>
              <CardHeader>
                <CardTitle>ประวัติการดูดวง 6 หมวดหมู่</CardTitle>
                <CardDescription>ประวัติการดูดวง 6 หมวดหมู่</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Label htmlFor="date">Date</Label>
                {
                  // list prediction with date
                  prediction &&
                    prediction.map((item, index) => (
                      <div
                        key={index}
                        className="space-y-1 flex justify-between items-center"
                      >
                        <span>
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                        <div className="flex gap-2">
                          <ShowPredictsixcate prediction={item.prediction} />
                          <AlertDialog>
                            <AlertDialogTrigger>
                              <Button variant="destructive">ลบ</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  คุณต้องการลบคำทำนายนี้ใช่ไหม?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  คำทำนายนี้จะถูกลบออกจากระบบ
                                  และไม่สามารถกู้คืนได้
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() =>
                                    handdleDeletePredictionSixCategory(item._id)
                                  }
                                >
                                  ลบ
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    ))
                }
              </CardContent>
              <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="privateq">
            <Card>
              <CardHeader>
                <CardTitle>ประวัติการถามคำถามส่วนตัว</CardTitle>
                <CardDescription>ประวัติการถามคำถามส่วนตัว</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {question &&(
                  <Label htmlFor="quation">คำถาม</Label>
                )
                }
                {
                  question &&
                    question.map((item, index) => (
                      <div key={item._id}>
                        <div className="flex justify-between items-center">
                          <span>คำถามที่ {index + 1} :</span>
                          <ShowQuetion quetion={item.massage} />
                        </div>
                      </div>
                    ))

                }
               
              </CardContent>
              <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
}

export default Profile;
