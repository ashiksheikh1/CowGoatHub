import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FaRegUser, FaUserEdit } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const UpdadProfilModal = () => {
 const handleUpdateModal = async(e)=>{
  e.preventDefault()
   const name = e.target.name.value;
   const image = e.target.image.value;
    // console.log(name, image)
  const { data, error } = await authClient.updateUser({
     name,
     image
    })
    //   if (error) {
    //   toast.error(error.message || "Not Update Profile");
    // }
    if (data) {
      toast.success("Update Profile");
    }
    else{
      toast.error("Update not availeable");
    }
 }
   

    return (
        <div>
      <ToastContainer />
      <Modal>
      <Button  variant="secondary"><FaUserEdit />Update Profile</Button>
      <Modal.Backdrop>
     
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
          
             <FaRegUser  className="bg-accent-soft text-accent-soft-foreground"/>
              <Modal.Heading>Update Profil</Modal.Heading>
           
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleUpdateModal} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" isRequired>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url" isRequired>
                    <Label>Image Url</Label>
                    <Input placeholder="Enter your url" />
                  </TextField>
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default UpdadProfilModal;