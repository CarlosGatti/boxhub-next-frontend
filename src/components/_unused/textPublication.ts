export interface userListProps {
  value: any
  index: number
}

interface userProps {
  publication: Object[]
  groups: Object[]
  contacts: Object[]
  followUser: Object[]
}

export const user: userProps = {
  publication: [
    {
      id: 1,
      postType: 'announcement',
      avatar:
        'https://images.unsplash.com/photo-1665615836067-e3af47d210b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      name: 'Mario Mario',
      text: 'Vai rolar um evento de Design com as novas tendência para esse ano e as novidades sobre as novas... ',
      midia:
        'https://images.unsplash.com/photo-1664575195621-a5f347e67554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 2,
      postType: 'survey',
      avatar:
        'https://images.unsplash.com/photo-1647087602470-886d2be417c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,',
      name: 'Leuriscreia',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      midia:
        'https://images.unsplash.com/photo-1665716488176-8237eb4fdd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 3,
      postType: 'events',
      avatar:
        'https://images.unsplash.com/photo-1593191798143-7f98dc35a98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Lorem Ipsum',
      text: 'Vai rolar um evento de Design com as novas tendência para esse ano e as novidades sobre as novas...',
      midia:
        'https://images.unsplash.com/photo-1665682907312-f473e498a537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      day: '25',
      month: 'Out',
      titleEvent: 'Evento de Design',
      descriptionEvent:
        'Vai rolar um evento de Design com as novas tendência para esse ano e as novidades sobre as novas... ',
    },
    {
      id: 4,
      postType: 'publication',
      avatar:
        'https://images.unsplash.com/photo-1665615836067-e3af47d210b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      name: 'Mario Mario',
      text: 'Vai rolar um evento de Design com as novas tendência para esse ano e as novidades sobre as novas... ',
      midia:
        'https://images.unsplash.com/photo-1664575195621-a5f347e67554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 5,
      postType: 'publication',
      avatar:
        'https://images.unsplash.com/photo-1647087602470-886d2be417c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,',
      name: 'Leuriscreia',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      midia:
        'https://images.unsplash.com/photo-1665716488176-8237eb4fdd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 6,
      postType: 'publication',
      avatar:
        'https://images.unsplash.com/photo-1593191798143-7f98dc35a98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Lorem Ipsum',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      midia:
        'https://images.unsplash.com/photo-1665682907312-f473e498a537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ],
  groups: [
    { id: 0, title: 'GS ', menbers: 1000 },
    { id: 2, title: 'Los devs', menbers: 7 },
    { id: 3, title: 'UX Design', menbers: 111 },
    /*     { id: 0, title: 'GS ', menbers: 1000 },
    { id: 2, title: 'Los devs', menbers: 7 },
    { id: 3, title: 'UX Design', menbers: 111 }, */
  ],
  contacts: [
    {
      id: 1,
      name: 'Carolina Silveira',
      avatar: '',
      following: true,
      follower: true,
    },
    {
      id: 2,
      name: 'Felipe Silveira',
      avatar: '',
      following: true,
    },
    {
      id: 3,
      name: 'Mario Silveira',
      avatar: '',
      following: true,
      follower: true,
    },
    {
      id: 4,
      name: 'Joana Silveira',
      avatar: '',

      follower: true,
    },
    {
      id: 5,
      name: 'Mariazinha Silveira',
      avatar: '',
      following: true,
    },
    {
      id: 6,
      name: 'Dara Silveira',
      avatar: '',
      following: true,
      follower: true,
    },
    {
      id: 7,
      name: 'Carolina Silveira',
      avatar: '',

      follower: true,
    },
    {
      id: 8,
      name: 'Felipe Silveira',
      avatar: '',
      following: true,
      follower: true,
    },
    {
      id: 9,
      name: 'Mario Silveira',
      avatar: '',

      follower: true,
    },
    {
      id: 10,
      name: 'Joana Silveira',
      avatar: '',
      following: true,
      follower: true,
    },
    {
      id: 11,
      name: 'Mariazinha Silveira',
      avatar: '',
      following: true,
    },
    {
      id: 12,
      name: 'Dara Silveira',
      avatar: '',
      following: true,
      follower: true,
    },
  ],
  followUser: [
    { id: 1, name: 'Carolina Silveira', avatar: '' },
    { id: 2, name: 'Felipe Silveira', avatar: '' },
    { id: 3, name: 'Mario Silveira', avatar: '' },
    { id: 4, name: 'Joana Silveira', avatar: '' },
  ],
}
