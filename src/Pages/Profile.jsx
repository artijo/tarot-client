import UserLayout from "../Layouts/userLayout";
import { useAuth } from "../context/contextAuth";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { doSignOut } from "../firebase/firebase_login";

function Profile() {
    const { currentUser } = useAuth()
  return (
    <UserLayout>
        <div className="container mx-auto text-white">
            <h1 className="text-center">Profile</h1>
            <Tabs defaultValue="account" className="container mx-auto sm:max-w-[680px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="tarot6">ประวัติการดูดวง 6 หมวดหมู่</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={currentUser.displayName} readOnly/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue={currentUser.email} readOnly />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
            <Button className="ml-4" onClick={() => { doSignOut() }} variant="secondary">Logout</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="tarot6">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
        </div>
        
    </UserLayout>
  );
}

export default Profile;