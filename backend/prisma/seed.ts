import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // เข้ารหัสรหัสผ่าน rootadmin
    // const hashedPassword = await bcrypt.hash('admin123', 10);

    // สร้างหรืออัปเดตผู้ใช้ rootadmin
    const rootAdmin = await prisma.users.upsert({
        where: { users_id: 'rootadmin' },  // ค้นหาจาก username
        update: {},  // ถ้าพบจะไม่อัปเดตข้อมูลเพิ่มเติม
        create: {
            username: 'rootadmin',
            password: 'admin123',  // รหัสผ่านที่เข้ารหัส
            age: 10,
            address: 'system',
            status_role: 'adminid',  // อัปเดต role_id ให้ตรงกับ schema ของคุณ
            // สามารถเพิ่มฟิลด์อื่นๆ ตาม schema ของตาราง user
            create_by: 'system',    // ตัวอย่างค่าเริ่มต้น
            create_date: new Date(),
            update_by: 'system',
            update_date: new Date(),
        },
    });

    console.log({ rootAdmin });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        // await prisma.$disconnect();
        // process.exit(1);
    });