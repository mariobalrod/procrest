import 'date-fns';
import { Redirect, Link } from 'react-router-dom';
import Button from '../../../components/Button';
import useConnect from './connect';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';
import DatePicker from '@trendmicro/react-datepicker';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import './styles.css';

const BookingModal = () => {
  const {
    handleDateChange,
    selectedDate,
    handleSubmitBooking,
    isLoading,
    isAuth,
  } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: "white" }} />,
  });

  if (isLoading) {
    return <Loader indicator={indicatorEl} containerProps={containerProps} />;
  }

  if (!isAuth) return <Redirect to="/" />;

  return (
    <div className="back">
      <div className="modal-content" style={{ width: "514px" }}>
        <div className="modal-body containerModal">
          <div className="headerModal mt-4">
            <h1 className="titleModal">Proceso de Reserva</h1>
          </div>
          <form
            onSubmit={handleSubmitBooking}
            style={{
              width: "100%",
              marginTop: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DatePicker date={selectedDate} onSelect={handleDateChange} />
            <div className="footerModal2">
              <Link to="/apartments" className="linkB">
                Volver
              </Link>
              <Button type="submit" text="Reservar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingModal
