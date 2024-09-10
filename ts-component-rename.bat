@echo off

@REM set VAR_1=this
@REM set VAR_2=that
@REM set VAR_3=and_that

set bat_file_path=%cd%
@REM echo Current path is: %bat_file_path%

rem А что значит звездочка? и %1?
rem D:\!q\soft\p\apps\python.exe D:\!q\files\p\prjs\ts-component-renamer-py\main.py %*

@REM D:\!q\soft\p\apps\python.exe D:\!q\files\p\prjs\ts-component-renamer-py\main.py %1 %VAR_1% %VAR_2% %VAR_3%

D:\!q\soft\p\apps\python.exe D:\!q\files\p\prjs\ts-component-renamer-py\main.py %1 %bat_file_path%

pause