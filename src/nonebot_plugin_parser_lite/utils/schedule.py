from apscheduler.schedulers.asyncio import AsyncIOScheduler
from nonebot import get_driver

scheduler = AsyncIOScheduler()
scheduler.configure({"apscheduler.timezone": "Asia/Shanghai"})

driver = get_driver()


@driver.on_startup
async def _():
    if not scheduler.running:
        scheduler.start()


@driver.on_shutdown
async def _():
    if scheduler.running:
        scheduler.shutdown()
