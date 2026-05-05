import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FaRegUser, FaUserEdit } from "react-icons/fa";

const BookingModal = () => {
//  const handleUpdateModal = async(e)=>{
//   e.preventDefault()
//    const name = e.target.name.value;
//    const image = e.target.image.value;
//     console.log(name, image)
//     await authClient.updateUser({
//      name,
//      image
//     })
//  }

    return (
        <div>
      <Modal>
      <Button className="w-full py-2 rounded-lg font-semibold text-white
                bg-emerald-600 hover:bg-emerald-700
                shadow-md hover:shadow-lg transition active:scale-95">Booking</Button>
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
                {/* onSubmit={handleUpdateModal}  */}
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
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

export default BookingModal;