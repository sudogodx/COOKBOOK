---
title: "🫣 Hide Root from Bank App"
---

# เครื่องมือ

- [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext/releases/)
- [LSPosed](https://github.com/LSPosed/LSPosed/releases/)
- [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases/)
- [PlayIntegrityFix](https://github.com/chiteroman/PlayIntegrityFix/releases/)
- [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/)
- [IAmNotADeveloper](https://github.com/xfqwdsj/IAmNotADeveloper/releases/)
- [BootloaderSpoofer](https://github.com/chiteroman/BootloaderSpoofer/releases/)
- [Hide My Applist](https://github.com/Dr-TSNG/Hide-My-Applist/releases/)
- [MT Manager](https://mt2.cn/)

# ติดตั้ง Module Magisk

ทำการติดตั้ง Magisk Module ทีละตัวและทำการ Reboot ตามลำดับ

1. [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext/releases/)
2. [PlayIntegrityFix](https://github.com/chiteroman/PlayIntegrityFix/releases/)
3. [LSPosed](https://github.com/LSPosed/LSPosed/releases/)
4. [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases/)
5. [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/)

สร้าง Folder `/data/adb/shamiko/whitelist`

# ติดตั้ง Lsposed Module

![[howtoopenlsposed.png]]
<p align="center">
    <em>(รูปที่ 1 วิธีการเปิด Lsposed)</em>
</p>

ทำการติดตั้ง Lsposed Module ทีละตัวตามลำดับ

1. [BootloaderSpoofer](https://github.com/chiteroman/BootloaderSpoofer/releases/)
2. [IAmNotADeveloper](https://github.com/xfqwdsj/IAmNotADeveloper/releases/)
3. [Hide My Applist](https://github.com/Dr-TSNG/Hide-My-Applist/releases/)

# Config BootloaderSpoofer

เปิดใช้งานเฉพาะแอปที่ต้องการรัน

![[config_bootloaderspoofer.jpg]]
<p align="center">
    <em>(รูปที่ 2 ตัวอย่างการตั้งค่า BootloaderSpoofer)</em>
</p>

# Config IAmNotADeveloper

เปิดใช้งานเฉพาะแอปที่ต้องการรัน

![[config_iamnotdeveloper.jpg]]
<p align="center">
    <em>(รูปที่ 3 ตัวอย่างการตั้งค่า IAmNotADeveloper)</em>
</p>

# Config Hide My Applist

เปิดใช้งานเฉพาะ System Framework

![[config_hidemyapplist.jpg]]
<p align="center">
    <em>(รูปที่ 4 ตัวอย่างการตั้งค่า Hide My Applist)</em>
</p>

แล้วทำการ Reboot จากนั้นเข้าไปที่ Hide My Applist เลือกรายการแอปที่ต้องการเปิดใช้งาน (แอปธนาคาร)

![[hma_app_manage.png]]
<p align="center">
    <em>(รูปที่ 5 ตัวอย่างการตั้งค่าแอปที่ต้องการเปิดใช้งาน)</em>
</p>

เลือก Module ที่ต้องการซ่อน (Lsposed Module) 

![[hma_app_hide.png]]
<p align="center">
    <em>(รูปที่ 6 ตัวอย่างการเลือก Module ที่ต้องการซ่อน)</em>
</p>

เลือกแอปที่ต้องการเปิดใช้งานการซ่อน Module (แอปธนาคาร)

![[hma_app_hide_applied.png]]
<p align="center">
    <em>(รูปที่ 7 ตัวอย่างการเลือกแอปที่ต้องการเปิดใช้งานการซ่อน)</em>
</p>

# Config Magisk

![[magisk_denylist.png]]
<p align="center">
    <em>(รูปที่ 8 ตัวอย่างการเลือกแอปที่ต้องการซ่อนด้วย Magisk)</em>
</p>
