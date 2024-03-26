import { Drawer } from 'vaul';
import DrawerFile from './drawerFile';

interface IDrawer{
    show: string;
    showChange: string
}

function NewDrawer({show, showChange}:IDrawer) {
  return (
    <Drawer.Root direction='right' open={show} onOpenChange={showChange}>
      <Drawer.Trigger asChild>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-green'/>
        <Drawer.Content className='bg-gray-100 rounded-t-[10px] h-full w-[600px] mt-24 fixed bottom-0 right-0'>

          {/*File to be shown */}
          <DrawerFile/>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default NewDrawer