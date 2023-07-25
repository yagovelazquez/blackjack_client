import { useIsMutating } from 'react-query';
import { Outlet } from 'react-router-dom';
import LoadingSpinnerModal from '../loading/LoadingSpinnerModal';

function Layout() {
  const isMutating = useIsMutating();
  // const isDealMutating = useIsMutating({ mutationKey: [cacheKeys.mutation.deal] });
  return (
    <div className="flex justify-center items-center min-w-screen min-h-screen bg-gray">
      <Outlet />
      <LoadingSpinnerModal isLoading={(isMutating)} />
    </div>
  );
}
export default Layout;
