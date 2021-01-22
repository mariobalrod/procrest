import { useCallback, useState } from 'react';
import useActionsBooking from '../../../data/hooks/useActionsBooking';
import { useHistory } from 'react-router-dom';
import useMe from '../../../data/hooks/useMe';
import useQuery from '../../../utils/useQuery';

const useConnect = () => {
  const { queryParams } = useQuery();
  const apartment = queryParams.get("apartment");
  const { push } = useHistory();
  const { me, isLoading: meLoading } = useMe();
  const { createBooking, isLoading: bookingLoading } = useActionsBooking();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmitBooking = useCallback(() => {
    const res = window.confirm('¿Estas seguro? Confirma su reserva.');

    if (res) {
      createBooking({
          date: selectedDate,
          user: me.id,
          apartment: apartment
      }).then(() => {
        push('/profile')
      })
    }
  }, [push, apartment, me, selectedDate, createBooking]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isAuth = !!me;

  return {
    isAuth,
    me,
    isLoading: meLoading || bookingLoading,
    handleDateChange,
    selectedDate,
    handleSubmitBooking,
  };
}

export default useConnect;