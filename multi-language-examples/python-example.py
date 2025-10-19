users = {"1": "Alice", "2": "Bob"}

def add_user(user_id, name):
    users[user_id] = name
    print(f"Added {name}")

def delete_user(user_id):
    if user_id in users:
        del users[user_id]
        print(f"Deleted user {user_id}")
    else:
        print("User not found")

def list_users():
    for id, name in users.items():
        print(f"{id}: {name}")

add_user("3", "Charlie")
list_users()
delete_user("2")
list_users()
