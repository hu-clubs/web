let clubs = [{
  'members': [],
  '_id': '5ad8f3d85c00556e5499f340',
  'name': 'Sigma Phi Mu',
  'shortName': 'SPM',
  '__v': 1
}, {
  'members': ['5ad8f28ac95be76e385a7ced'],
  '_id': '5ae489eb10837f2d52f61b9e',
  'name': 'Chi Sigma Alpha',
  'shortName': 'CSA',
  '__v': 0
}];

export async function getClubs () {
  return clubs;
}

export async function login (email, password) {
  return {
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWIxYzI0ZjkzYjFlMjcxMmFhNDBjMTM0IiwiaWF0IjoxNTI4NTcxMTQ0LCJpc3MiOiJodS1jbHVicyJ9.5t6zUHanDgPFWX2vrdLNoNg1tDShLn6YvQj2ewgjRyU'
  };
}

export function register () {
}
