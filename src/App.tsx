import { Container, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 16, md: 2 }}
          >
             <Column column={ColumnType.ENTERTAINMENT} />
            <Column column={ColumnType.EDUCATIONAL} />
           </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
