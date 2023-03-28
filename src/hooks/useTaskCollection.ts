import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Entertainment: [
      {
        id: uuidv4(),
        column: ColumnType.ENTERTAINMENT,
        title: 'Task 2',
        link:'youtube.com',
        linkId:'GGo3MVBFr1A',
        color: 'yellow.300',
      },
    ],
    Educational: [
      {
        id: uuidv4(),
        column: ColumnType.EDUCATIONAL,
        title: 'Task 3',
        link:'youtube.com',
        linkId:'GGo3MVBFr1A',
        color: 'red.300',
      },
    ],
  });
}

export default useTaskCollection;
