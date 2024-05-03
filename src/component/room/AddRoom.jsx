import React, { useState } from 'react';
import { addRoom } from '../utils/ApiFunctions';
import RoomTypeSeclector from '../common/RoomTypeSelector';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddRoom() {
  const [newRoom, setNewRoom] = useState({
    photo: null,
    roomType: '',
    roomPrice: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRoomInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'roomPrice') {
      if (!isNaN(value)) {
        value = parseInt(value);
      } else {
        value = '';
      }
    }
    setNewRoom({ ...newRoom, [name]: value });
    console.log(newRoom);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setNewRoom({ ...newRoom, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await addRoom(
        newRoom.photo,
        newRoom.roomType,
        newRoom.roomPrice
      );

      if (success !== undefined) {
        setSuccessMessage('Add room successfully ');
        setNewRoom({ ...newRoom, roomType: '', roomPrice: '' });
        setImagePreview('');
        setErrorMessage('');
      } else {
        setErrorMessage('Error adding new room');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000);
  };

  return (
    <>
      <section className="container mt-5 mb-5 ">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h2 className="mt-5 mb-2">Add a new room</h2>
            {successMessage && (
              <div className="alert alert-success fade show">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger fade show">{errorMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="roomType" className="form-label">
                  Room type
                </label>
                <div>
                  <RoomTypeSeclector
                    handleRoomInputChange={handleRoomInputChange}
                    newRoom={newRoom}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="roomPrice" className="form-label">
                  Room price
                </label>
                <input
                  className="form-control"
                  required
                  id="roomPrice"
                  type="number"
                  name="roomPrice"
                  value={newRoom.roomPrice}
                  onChange={handleRoomInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                  Room photo
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview Room Photo"
                    style={{ maxWidth: '400px', maxHeight: '400px' }}
                    className="mt-3 rounded"
                  />
                )}
              </div>

              <div className="d-frid d-flex mt-2">
                <button className="btn btn-outline-primary ml-5">
                  Save room
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
