import React, { useState } from 'react';
import { getRoomById, updateRoom } from '../utils/ApiFunctions';

const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: null,
    roomType: '',
    roomPrice: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({ ...room, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateRoom(roomId, room);
      if (response.status === 200) {
        setSuccessMessage('Room successfully updated');
        const updatedRoomData = await getRoomById(roomId);
        setRoom(updatedRoomData);
        setImagePreview(updatedRoomData.photo);
        setErrorMessage('');
      } else {
        setErrorMessage('Error updating room');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Edit Room</h2>
    </div>
  );
};

export default EditRoom;
